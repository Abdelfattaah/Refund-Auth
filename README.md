## Refund Authorization for Odoo POS  

This module enhances Odoo POS by requiring a password for refund authorization. It ensures only authorized employees can process refunds by verifying the password stored in `hr.employee`.  


### Demo  

A 30-second demo video of the functionality is available here:  
[![Watch the demo](https://img.youtube.com/vi/9ABbyhrK--Q/0.jpg)](https://youtu.be/9ABbyhrK--Q)  


### Technical Details  

- **Custom Popup:** Created a new `RefundAuthPopup` to mask the input as a password.  
- **POS Button Extension:** Extended `RefundButton` to trigger the popup before processing refunds.  
- **Employee Verification:** Used an RPC call to check the entered password against `hr.employee.refund_auth_pass`.  
- **Secure Handling:** The refund proceeds only if the password matches; otherwise, an error popup is displayed.  


### Implementation  

- **Frontend:** Extended POS UI using OWL components (`RefundAuthPopup.js`, `RefundAuthPopup.xml`).  
- **Backend:** Added a custom method in `hr.employee` to validate passwords via RPC.  


### How to Use  

1. Set the **Refund Auth Password** in the employee record.  
2. When clicking the refund button, the custom popup appears.  
3. If the password is correct, the refund proceeds; otherwise, access is denied.  

This solution enhances security in POS by preventing unauthorized refunds with minimal UI modification.
