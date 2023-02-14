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
    <div className="input-group flex-nowrap gap-2 mb-5" data-aos="fade-up">
      <input
        id="postInput"
        type="text"
        className="form-control rounded bg-dark"
        placeholder="Type to search.."
        aria-label="Search"
        aria-describedby="addon-wrapping"
      />
      <button className="btn btn-primary" type="submit">
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
}
