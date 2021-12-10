/* the following function validates user's information in order to complete the operation */
function validateform(form) 
{
  /* Password and Confirm Password validation */
  if (form.pwd.value != "" && form.pwd.value == form.cpwd.value) 
  {
    if (form.pwd.value.length < 6) 
    {
      alert("Error: Password must contain at least six characters!");
      form.pwd.focus();
      return false;
    }
    re = /^[A-Za-z]/;
    {
      if (!re.test(form.pwd.value)) 
      {
        alert("Error: Password must start with an alphabet!");
        form.pwd.focus();
        return false;
      }
    }
    re = /[0-9]/;
    if (!re.test(form.pwd.value)) 
    {
      alert("Error: Password must contain at least one number (0-9)!");
      form.pwd.focus();
      return false;
    }
    re = /[A-Z]/;
    if (!re.test(form.pwd.value)) 
    {
      alert("Error: Password must contain at least one uppercase letter (A-Z)!");
      form.pwd.focus();
      return false;
    }
  }
  else 
  {
    alert("Error: Confirm password should be the same as password!");
    form.pwd.focus();
    return false;
  }

  /* Username validation */
  if (form.uname.value == "") 
  {
    alert("Error: Username cannot be blank!");
    form.uname.focus();
    return false;
  }
  re = /^[A-Za-z]/;
  {
    if (!re.test(form.uname.value)) 
    {
      alert("Error: Username must start with an alphabet!");
      form.uname.focus();
      return false;
    }
  }
  if (form.uname.value.length < 6) 
  {
    alert("Error: Username must contain at least six characters!");
    form.uname.focus();
    return false;
  }

  /* Age validation */
  if (form.yourage.value <= 18 && form.yourage.value >= 60) 
  {
    alert("Error: Age must be between 18-60!");
    form.yourage.focus();
    return false;
  }
  alert("All good!");
  return true;
}