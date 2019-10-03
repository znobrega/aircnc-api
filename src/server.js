import server from "./app";

const PORT = process.env.PORT || 3001;

server.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
