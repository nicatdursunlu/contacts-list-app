export const validateForm = (fields) => {
  if (fields.name.trim() === "") {
    alert("Name is required, please, fill the gap");
    return false;
  } else if (fields.tel.trim() === "") {
    alert("Telephone number is required, please, write your telephone number");
    return false;
  } else if (fields.email.trim() === "") {
    alert("Email is required, please, write your email address");
    return false;
  } else if (fields.address.trim() === "") {
    alert("Address is required, please, write your address");
    return false;
  } else return true;
};
