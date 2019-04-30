import { h } from "hyperapp"

const RecommendedResource = () => (
  <li class="Question-wrapper is-visible">
    <div class={"Question__badge"}>Recommended resource</div>
    <div class="Question">
      <h2>
        <a href="https://frontendmasters.com/books/front-end-handbook/2019/">
          Frontend Masters Handbook
        </a>
      </h2>
      <p>
        This is a guide that anyone could use to learn about the practice of
        front-end development. It broadly outlines and discusses the practice of
        front-end engineering: how to learn it and what tools are used when
        practicing it.
      </p>
    </div>
  </li>
)

export default RecommendedResource
