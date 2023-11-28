export default function (context) {
  const token = localStorage.getItem("token");
  if (!token) {
    return context.redirect(`/login`);
  }
}

