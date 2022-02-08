/* jshint esversion: 6 */

/**
 * CHANGEME: On this line explain what this does
 * 
 * Author: Nick Hance
 * First deploy: 2022-02-08
 */


/**
 * Usage instructions:
 *  1. Update documentation at top
 *  2. Change FormScriptYourName to a unique object name (Global search/replace or just the 2 lines below)
 *  3. Add your code
 *  4. Add web resource
 *  5. Setup onload/onsave hooks. They'll be FormScriptYourName.onSave or FormScriptYourName.onLoad
 */

var FormScriptYourName = FormScriptYourName || {}; // CHANGE THIS!
FormScriptYourName = {

  /**
   * REFERENCE:
   * 
   * Xrm types: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/xrm
   * 
   * V8 quick links:
   *    eventContext: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/xrm/v8/index.d.ts#L1077 (EventContext)
   *    formContext:  https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/xrm/v8/index.d.ts#L258  (Page)
   */


  /* 
  * The OnSave event occurs when: 
  *   - The user clicks the Save icon in the lower right corner of the form, even when there is no changed data to be saved.
  *   - Code executes the formContext.data.entity.save method, even when there is no changed data to be saved.
  *   - The user navigates away from the form and there is unsaved data in the form.
  *   - The auto-save option is enabled, 30 seconds after data has changed and there is unsaved data in the form.
  *   - Code executes the formContext.data.save method and there is unsaved data in the form.
  *   - Code executes the formContext.data.refresh method passing a true value as the first parameter and there is unsaved data in the form.
  * 
  * To determine which button was clicked to perform the save, use the getSaveMode method.
  * 
  * You can cancel the save action by using the preventDefault method within the event arguments object.
  * The preventDefault method which is accessible by using the getEventArgs method that is part of the execution context.
  * 
  * Execution context is automatically passed to the form event handler.  
  * 
  * Reference: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/events/form-onsave
  */
  onSave: function(eventContext) {
    const formContext = eventContext.getFormContext();

    // COPY/PASTE OnSave CODE HERE
  },





  /*
  * The form OnLoad event occurs after the form has loaded. It cannot prevent the window from loading.
  * Use the OnLoad event to apply logic about how the form should be displayed, to set properties on fields, and interact with other page elements.
  *
  * When the Microsoft Dynamics 365 for tablets client is disconnected, the OnLoad event is the only event that will occur.
  * 
  * Reference: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/events/form-onload
  */
  onLoad: function(eventContext) {
    if (eventContext) {
      const formContext = executionContext.getFormContext();
     
      // If you pass execution context, put your code here.

      // COPY/PASTE OnLoad CODE HERE
      
      /* // Example: Watch an attribute for changes
      let name = formContext.getAttribute('crm_name');
      name.addOnChange((context) => {
        var updated_name = context.getEventSource();
        console.log(`name has changed to ${updated_name.getValue()}`);
      });
      */

    } else {
      // If you do not pass execution context, your code goes here

    }
  }





  /* Other methods:
  *  Full reference: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference
  *
  *  Getting an attribute:
  *    formContext.getAttribute()
  *      Reference: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections/get
  *      Js reference: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/xrm/v8/index.d.ts#L258
  *      Examples:
  *        let itemNumber = formContext.getAttribute('itemNumber');
  *        let name = formContext.getAttribute('name');
  *        All Xrm.Attributes types: NumberAttribute, StringAttribute, EnumAttribute, BooleanAttribute, DateAttribute, OptionSetAttribute
  * 
  *  Attribute OnChange: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/events/attribute-onchange
  *    You can use any other function you define in this file as the argument for addOnChange, but you must pass context
  *    Example:
  *        let name = formContext.getAttribute('string');
  *        name.addOnChange((context) => {
  *          var name = context.getEventSource();
  *          console.log("name has changed to ", name.getValue());
  *        })
  *      
  *  getValue: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getvalue
  *    Example: (See attribute OnChange example)
  */     
}
