const overviewButon = document.getElementById("overview");
const curriculum = document.getElementById("curriculum");
const pageBoxContent = document.getElementById("page-box-content");

const overview = ` <p>
                LearnPress is a comprehensive WordPress LMS Plugin for
                WordPress. This is one of the best WordPress LMS Plugins which
                can be used to easily create & sell courses online. You can
                create a course curriculum with lessons & quizzes included which
                is managed with an easy-to-use interface for users. Having this
                WordPress LMS Plugin, now you have a chance to quickly and
                easily create education, online school, online-course websites
                with no coding knowledge required. LearnPress is free and always
                will be, but it is still a premium high-quality WordPress Plugin
                that definitely helps you with making money from your WordPress
                Based LMS. Just try and see how amazing it is. LearnPress
                WordPress Online Course plugin is lightweight and super powerful
                with lots of Add-Ons to empower its core system.How to use WPML
                Add-on for LearnPress? No comments yet! You be the first to
                comment.
              </p>`;
const curriculumContent = `<p>Curriculum</p>`;

let option = "overview";
overviewButon.className = "option-active";
pageBoxContent.innerHTML = overview;

const changeOption = (id) => {
  option = id;
  if (id == "overview") {
    overviewButon.className = "option-active";
    curriculum.className = "";
    pageBoxContent.innerHTML = overview;
  } else if (id == "curriculum") {
    curriculum.className = "option-active";
    overviewButon.className = "";
    pageBoxContent.innerHTML = curriculumContent;
  }
};

overviewButon.onclick = () => changeOption("overview");

curriculum.onclick = () => changeOption("curriculum");
