import RenderDogs from "../features/campsites/RenderDogs"
//This seems confusing now but I am naming the files this way for a future edit.


const DogInfoScreen = ({route}) => {

    const {campsite} = route.params;
    return <RenderDogs campsite={campsite} />
    //this return statement is just passing a prop for what it shoudl be rendering

}

export default DogInfoScreen;