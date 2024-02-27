const NewProduct = () => {
  return (
    <div className="fps_child">
      <img src="/test2.jpg" />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          fontSize: "60px",
          zIndex: "1000",
          transform: "translate(-50%, -50%)",
        }}
      >
        이미지 준비중...
      </div>
    </div>
  );
};

export default NewProduct;
