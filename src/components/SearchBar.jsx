import { useEffect } from "react";
import $ from "jquery";

export default function SearchBar() {
  useEffect(() => {
    var target = $(".postTarget");
    var input = $("#postInput");
    var notFound = $(".postNotFound");

    target.each(function () {
      $(this).attr("data-search-term", $(this).text().toLowerCase());
    });

    input.on("keyup", function () {
      var searchTerm = $(this).val().toLowerCase();
      notFound.toggle(!$(".postTarget .card:visible").length);
      target.hide();

      if (searchTerm) {
        var matches = target.filter("[data-search-term *= " + searchTerm + "]");
        notFound.toggle(matches.length === 0);
        matches.show();
      }
    });
  });

  return (
    <div className="input-group position-relative">
      <div className="position-absolute">
        <span className="input-group-text bg-transparent border-0 text-muted">
          <i className="bi bi-search"></i>&emsp;Search Title
        </span>
      </div>
      <input
        type="text"
        id="postInput"
        className="form-control border border-2 border-secondary"
      />
    </div>
  );
}
