import React, { useEffect, useState } from "react";
import StockCommentForm from "./StockCommentForm"; // 👈 IMPORTA O FORM
import { commentGetAPI, commentPostAPI } from "../../Services/CommentService";
import { toast } from "react-toastify";
import Spinner from "../Spinner/Spinner";
import StockCommentList from "../StockCommentList/StockCommentList";
import { CommentGet } from "../../Models/Comment";

type Props = {
  stockSymbol: string;
};

type CommentFormInputs = {
  title: string;
  content: string;
};

const StockComment = ({ stockSymbol }: Props) => {
  const [comments, setComments] = useState<CommentGet[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (stockSymbol) {
      getComments();
    }
  }, [stockSymbol]);

  const handleComment = (form: CommentFormInputs) => {
    commentPostAPI(form.title, form.content, stockSymbol)
      .then(() => {
        toast.success("Comment created!");
        getComments();
      })
      .catch(() => {
        toast.warning("Erro ao comentar");
      });
  };

  const getComments = async () => {
    try {
      setLoading(true);
      const res = await commentGetAPI(stockSymbol);
      setComments(res?.data || []);
    } catch {
      toast.error("Erro ao buscar comentários");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {loading ? (
        <Spinner />
      ) : (
        <StockCommentList comments={comments} />
      )}

      <StockCommentForm
        symbol={stockSymbol}
        handleComment={handleComment}
      />
    </div>
  );
};

export default StockComment;