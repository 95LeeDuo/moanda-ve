const PreviewInsta = () => {
  return (
    <div className="fps_child">
      <img src="https://picsum.photos/1600/700" />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          fontSize: "60px",
          color: "white",
          zIndex: "1000",
          transform: "translate(-50%, -50%)",
        }}
      >
        이미지 준비중...
      </div>
    </div>
  );
};

export default PreviewInsta;