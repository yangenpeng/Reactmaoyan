const initState = {
  List: []
}
export default (state = initState, actions) => {
  const newState = JSON.parse(JSON.stringify(state));
  if (actions.type === "HotList") {
    newState.List = actions.value
  }
  return newState;
}
