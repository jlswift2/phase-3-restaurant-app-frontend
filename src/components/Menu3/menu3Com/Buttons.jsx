/**@jsxRuntime classic*/
/**@jsx jsx */
import { css, jsx } from "@emotion/react";

const Buttons = ({ setAll, setDrinks, setAppetizers, setEntrees, setDesserts }) => {
  const breakpoints = [576, 768, 992, 1200];

  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  return (
    <div
      className="Buttons"
      css={css`
        display: flex;

        button {
          margin: 0 2rem;
          border: none;
          padding: 10px;
          cursor: pointer;
          transition: 0.3s linear;
          outline: none;

          ${mq[2]} {
            margin: 0 1rem;
          }
          ${mq[0]} {
            margin: 0;
            margin-top: 2rem;
          }

          &::after {
            content: "";
            display: block;
            height: 2px;
            width: 0;
            background: #24242a;
            transition: width 0.3s ease-in;
          }

          &:hover::after {
            width: 100%;
          }

          span {
            padding: 0 5px;
            font-family: "Poppins", sans-serif;
            font-weight: 600;
            font-size: 1rem;
            margin: auto;
            ${mq[2]} {
              padding: 0;
            }
            ${mq[0]} {
              font-size: 0.9rem;
            }
          }
        }
      `}
    >
      <button
        onClick={() => {
          setAll(true);
          setDrinks(false);
          setAppetizers(false);
          setEntrees(false);
          setDesserts(false);
        }}
      >
        <span>All</span>
      </button>

      <button
        onClick={() => {
          setDrinks(true);
          setAll(false);
          setAppetizers(false);
          setEntrees(false);
          setDesserts(false);
        }}
      >
        <span>Drinks</span>
      </button>

      <button
        onClick={() => {
          setAppetizers(true);
          setAll(false);
          setDrinks(false);
          setEntrees(false);
          setDesserts(false);
        }}
      >
        <span>Appetizers</span>
      </button>

      <button
        onClick={() => {
          setEntrees(true);
          setAll(false);
          setDrinks(false);
          setAppetizers(false);
          setDesserts(false);
        }}
      >
        <span>Entrees</span>
      </button>

      <button
        onClick={() => {
          setDesserts(true);
          setAll(false);
          setDrinks(false);
          setAppetizers(false);
          setEntrees(false);
        }}
      >
        <span>Desserts</span>
      </button>
    </div>
  );
};

export default Buttons;
