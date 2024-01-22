module.exports = {


    friendlyName: 'View Imprint',
  
  
    description: 'Display "Imprint" page.',
  
  
    exits: {
  
      success: {
        viewTemplatePath: 'pages/legal/imprint'
      }
  
    },
  
  
    fn: async function () {
  
      // Respond with view.
      return {};
  
    }
  
  
  };