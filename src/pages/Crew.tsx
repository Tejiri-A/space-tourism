import MainContainer from "../components/MainContainer.tsx";
import PageTitle from "../components/PageTitle.tsx";
import CrewView from "../components/CrewView.tsx";

function Crew() {
  return (
    <MainContainer>
      <div className={"mx-auto flex w-full max-w-277.5 flex-col gap-y-300"}>
        <PageTitle number={"02"} title={"MEET YOUR CREW"} />
        <CrewView />
      </div>
    </MainContainer>
  );
}

export default Crew;
