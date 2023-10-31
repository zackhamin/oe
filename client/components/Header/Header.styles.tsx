const HeaderContainer = ({ children }) => {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          display: grid;
          grid-template-columns: 1fr 1fr auto;
          grid-gap: 20px; /* Add some spacing between columns */
          align-items: center;
          justify-content: center;
          margin: 10px;
          @media screen and (max-width: 768px) {
            grid-template-columns: 0 1fr auto;
          }
        }
      `}</style>
    </div>
  );
};

export default HeaderContainer;
