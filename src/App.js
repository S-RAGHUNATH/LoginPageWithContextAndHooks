import React, { Component } from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import PageContent from "./PageContent";

class App extends Component {
  render() {
    return (
      <>
      <ThemeProvider>
        <LanguageProvider>
          <PageContent>
        <Navbar />
        <Form />
        </PageContent>
        </LanguageProvider>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
