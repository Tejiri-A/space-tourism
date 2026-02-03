import MainContainer from "../components/MainContainer.tsx";
import PageTitle from "../components/PageTitle.tsx";
import DestinationView from "../components/DestinationView.tsx";

function Destination() {
  return (
    <MainContainer>
      <div className={"mx-auto flex w-full max-w-277.5 flex-col gap-y-300"}>
        <PageTitle number={"01"} title={"PICK YOUR DESTINATION"} />
        <DestinationView />
      </div>
    </MainContainer>
  );
}

export default Destination;
