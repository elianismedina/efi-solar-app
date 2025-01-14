export { auth as middleware } from "@/../auth";

export const config = {
  matcher: ["/", "/quotes/add-quote", "/quotes/update-quote/*"],
};
