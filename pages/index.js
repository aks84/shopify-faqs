import { Heading, Page, List, Checkbox } from "@shopify/polaris";

const Index = () => (
  <Page>
 
    <Heading>Add FAQs to Shopify Easily  </Heading>
    <p> Add FAQs to pages, products, and articles.</p>

          <Checkbox label="Pages" />
          <br /> 
          <Checkbox label="Articles" />
          <br />
          <Checkbox label="Products" />
     
      <p> Check the boxes above to enable FAQs and head to pages/articles/products to add FAQs with JSON-LD schema.</p>
  

  
  </Page>
);

export default Index;
