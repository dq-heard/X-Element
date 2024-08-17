import { useState, useEffect, useRef } from "react";
import { Document, Page } from "react-pdf";
import { throttle } from "lodash";

import file from "../../assets/X-Element_Orbital_Blast_2 (5).pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import "./newsletter.css";

const Newsletter = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setWidth] = useState(0);
  const containerRef = useRef();

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.getBoundingClientRect().width);
      }
    };

    const throttledUpdateWidth = throttle(updateWidth, 1000);

    updateWidth();
    window.addEventListener("resize", throttledUpdateWidth);

    return () => {
      window.removeEventListener("resize", throttledUpdateWidth);
    };
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <section
      className="section newsletter"
      aria-label="Orbital Blast Newsletter"
    >
      <div className="container">
        <p className="section-subtitle">Check Out Our</p>

        <h2 className="h2 section-title">
          Monthly <span className="span">Newsletter</span>
        </h2>

        <p className="section-text">
          Orbital Blast is a digital article that aims to inform community
          members about recent triumphs, relevant news, and other worthy
          highlights.
          <br />
          <br />
          With our newly redesigned website, Orbital Blast is the next step
          we're taking toward bolstering our online presence and building a
          stronger connection with our fanbase.
        </p>

        <div
          className="pdf-container"
          ref={containerRef}
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} width={width} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>

          <div className="pages">
            <button
              disabled={pageNumber <= 1}
              onClick={() => setPageNumber(pageNumber - 1)}
            >
              &lt; Previous
            </button>
            <button
              disabled={pageNumber >= numPages}
              onClick={() => setPageNumber(pageNumber + 1)}
            >
              Next &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
