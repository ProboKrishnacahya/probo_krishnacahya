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
    <div class="input-group mb-3 position-relative">
      <div class=" position-absolute">
        <span class="input-group-text bg-transparent border-0 text-muted">
          <i class="bi bi-search"></i>&emsp;Search Title
        </span>
      </div>
      <input
        type="text"
        id="postInput"
        class="form-control border border-2 border-secondary"
      />
    </div>
  );
}
