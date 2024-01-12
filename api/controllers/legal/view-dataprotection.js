module.exports = {


    friendlyName: 'View Data Protection',
  
  
    description: 'Display "Data Protection" page.',
  
  
    exits: {
  
      success: {
        viewTemplatePath: 'pages/legal/dataprotection'
      }
  
    },
  
  
    fn: async function () {
  
      // Respond with view.
      return {};
  
    }
  
  
  };