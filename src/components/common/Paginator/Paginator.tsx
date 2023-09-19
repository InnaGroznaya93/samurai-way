import { useState } from "react";
import styles from "./Paginator.module.css";
import cn from "classnames"


type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize: number
} 

export const Paginator = (props: PropsType) => {
  const {totalItemsCount, pageSize, currentPage, onPageChanged, portionSize} = props
  
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount/portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && 
      <button onClick={() => {
        setPortionNumber(portionNumber - 1)
      }} className={styles.btn}>PREV</button>}
      <div>
      {pages
      .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
      .map((p) => (
        <span
          className={cn({
            [styles.selectedPage]: currentPage === p
          }, styles.pageNumber)}
          key={p}
          onClick={(event) => onPageChanged(p)}
        >
          {p}</span>
      ))}
      </div>
     
      {portionCount > portionNumber && 
      <button onClick={() => {setPortionNumber(portionNumber + 1)}} className={styles.btn}>NEXT</button>}
    </div>
  );
};
