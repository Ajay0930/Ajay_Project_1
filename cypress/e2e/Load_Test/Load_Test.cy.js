



describe('Load Test Homepage', () => {
    it('should measure response time of the homepage', () => {
      const url = 'http://www.automationpractice.pl/index.php'; 
  
      // Perform 1000 requests in a loop
      for (let i = 0; i < 1000; i++) {
        cy.request({
          method: 'GET',
          url: url,
          timeout: 15000, // Set timeout to 15 seconds
        }).then((response) => {
          // Measure response time
          cy.log(`Response time for request ${i + 1}: ${response.duration} ms`);
          expect(response.status).to.eq(200); // Check for a 200 OK status
        });
      }
    });
  });