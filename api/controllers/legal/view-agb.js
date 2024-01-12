module.exports = {


    friendlyName: 'View AGB',
  
  
    description: 'Display "AGB" page.',
  
  
    exits: {
  
      success: {
        viewTemplatePath: 'pages/legal/agb'
      }
  
    },
  
  
    fn: async function () {
  
      // Respond with view.
      return {};
  
    }
  
  
  };