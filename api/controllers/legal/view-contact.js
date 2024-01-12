module.exports = {


    friendlyName: 'View Contact',
  
  
    description: 'Display "Contact" page.',
  
  
    exits: {
  
      success: {
        viewTemplatePath: 'pages/legal/contact'
      }
  
    },
  
  
    fn: async function () {
  
      // Respond with view.
      return {};
  
    }
  
  
  };