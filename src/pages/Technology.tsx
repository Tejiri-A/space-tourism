import MainContainer from "../components/MainContainer.tsx";
import PageTitle from "../components/PageTitle.tsx";
import TechnologyView from "../components/TechnologyView.tsx";

function Technology() {
  return (
    <MainContainer>
      <div className={"flex w-full flex-col gap-y-300 lg:ml-auto lg:max-w-[95vw]"}>
        <PageTitle number={"03"} title={"SPACE LAUNCH 101"} />
        <TechnologyView />
      </div>
    </MainContainer>
  );
}

export default Technology;
