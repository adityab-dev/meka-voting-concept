import "./ElectionPage.css";

export default function ElectionPage() {
  return (
    <section className="elect-container">
      <div className="elect-center">
        <div className="elect-headings">Upcoming Elections:</div>
        <div className="elect-horizontal">
          <div>UP State Elections</div>
          <div>02-04-2022</div>
        </div>

        <div className="elect-headings">Other Elections:</div>
        <div className="elect-horizontal">
          <div>Manipur State Elections</div>
          <div>04-04-2022</div>
        </div>

        <div className="elect-horizontal">
          <div>Chattigarh State Elections</div>
          <div>08-04-2022</div>
        </div>

        <div className="elect-horizontal">
          <div>Bangaluru State Elections</div>
          <div>12-04-2022</div>
        </div>

        <div className="elect-horizontal">
          <div>Gurugram Municipal Corporation</div>
          <div>16-04-2022</div>
        </div>
      </div>
    </section>
  );
}
