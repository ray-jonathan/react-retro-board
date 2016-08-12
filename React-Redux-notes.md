React Redux


Redux

- All app data in single data structure called `state` 
- `state` is held in the `store`
- The app reads the `state` from this `store`
- The `state` is never mutated directly outside the `store`
- `views` emit `actions` that describe what happened
- A new state is created by combining the old state and the action by a function called the
`reducer`

Store API

create 
subscribe


-----------------------------------------------
|                                              |
Action ---> Dispatcher ---> Store ---> View ---

CombineReducers - 

Reducer per state tree node

ie/
```
state = {
    threads: [
        {
            id: 1,
            messages: []
        },
        {
            id: 2,
            messages: []
        }
    ]
}
```

Should have a `threads` reducer and a `messages` reducer etc

Presentation and Container components

http://redux.js.org/docs/basics/UsageWithReact.html

https://facebook.github.io/react/docs/thinking-in-react.html

Presentational

if ref is set to a function, React will invoke that function after the component is mounted. 

The argument it supplies to that function is a reference to the DOM node of that element.

```
<input
        ref={node => input = node}
        type='text'
>
```


Using connect()

```
// Full function signature of `connect()`
connect(
  mapStateToProps(state, [ownProps]),
  mapDispatchToProps(dispatch, [ownProps]),
  mergeProps(stateProps, dispatchProps, [ownProps])
)
```

Mapping state to props (mapStateToProps)

Mapping dispatches to props (mapDispatchToProps)

mergeProps is called with two arguments: stateProps and dispatchProps. 
These are just the objects that are returned by mapStateToProps and mapDispatchToProps.

In sequence, `connect()` will do the following:



Async actions ie/ requesting data from a server 

redux-thunk

http://redux.js.org/docs/advanced/AsyncActions.html

