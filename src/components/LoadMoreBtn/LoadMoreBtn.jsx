import { LoadBtn } from "./LoadMoreBtn.styled";
import { Loader } from "../Loader/Loader";

export const LoadMoreBtn = ({ onLoadMore, loading }) => (
  <>
    {loading ? (
      <Loader />
    ) : (
      <LoadBtn onClick={onLoadMore} type="button">
        Load more
      </LoadBtn>
    )}
  </>
);
