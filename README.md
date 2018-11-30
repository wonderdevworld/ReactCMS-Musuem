# The Craft and Folk Art Musuem CMS for Mobile App

This project was built specifically for The Craft and Folk Art Museum per Public Programs Coordinator, Eunice Lee and my ongoing collaboration to bring the museum's digital prescence (both web and mobile) up to modern standards. The CMS was built so that the musuem would have complete control over what information appears in their mobile app (soon to be released on both iOS and Android). The desigin was meant to be simple and intuitive and allowed them to update or make changes to the mobile app without having to call the developer, which in this case is me.

## Process 

I chose the MERN stack to tackle this problem for many reasons. First, I wanted the museum to have access to the latest libraries and features, which React conviently provides. By using Redux for state managment I ensured that actions could be monitored throughout the application's life cycle. I set up authentication with passport and JWT so that only the museum could affect the mobile app. Mongo was used for the database and the site is hosted at the moment on Heroku. 

## Code Highlights
### Using Higher Order Components to handle auth routing within React

By building a HOC and using that to pass in child pages, I essentially could prohibit users from accessing parts of the site that they didn't have access to. React's lifecycle methods and some token verification through Redux proved essential in making sure this application was secure. By checking to see if there was an auth token on props, this HOC could redirect users if they weren't authenticated. 

```
export default ChildComponent => {
  class ComposedComponent extends Component {
    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    // check reducers for what's on the auth property
    return { auth: state.auth.authenticated };
  }
  return connect(mapStateToProps)(ComposedComponent);
};
```
Thanks to [Stephen Grider's](https://github.com/StephenGrider) Advanced React and Redux course for providing easy to understand code required for authentication

<img src="https://user-images.githubusercontent.com/29084524/43933236-5abd01b8-9bfd-11e8-9790-0e4c449942d1.gif" width="425"/> 
<img src="https://user-images.githubusercontent.com/29084524/43933125-bcde24f4-9bfc-11e8-82f6-1ad6fc79a8c3.gif" width="425"/>

<img src="https://user-images.githubusercontent.com/29084524/43933124-bcc6b878-9bfc-11e8-899b-c34cb294aa72.gif" width="425"/> 
<img src="https://user-images.githubusercontent.com/29084524/43932461-1b362e1a-9bf9-11e8-81f8-e19476a6913b.gif" width="425"/>

## Built With
+ [React](https://reactjs.org/)
+ [Redux](https://redux.js.org/)
+ [Passport](http://www.passportjs.org/)
+ [Express](https://expressjs.com/)
+ [Node](https://nodejs.org/en/)
+ [MongoDB](https://www.mongodb.com/)
+ [Mongoose](http://mongoosejs.com/)
+ [Sass](https://sass-lang.com/)

## Authors 
+ [Alex Edward Ball](https://github.com/AlexEBall)
