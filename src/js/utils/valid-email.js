/**
 * Support utility to work with validation of emails. (simple)
 */
export default function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
