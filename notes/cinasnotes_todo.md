Cina's Notes



Logout Link
    1) Remove tokeng
    
    
General Do
    -Welcome should maybe just say map?
    -There should be a way back to the map
    -learn about factories
    
    
    
Backend To do
    -If you register with existing user login, the UI should tell the user.
    
    
Front End to do
    -need a general button class
    -need center button sass variable or function
    -make the modal call into a function itself?
    
Front End Bugs
    -UI Modal changes width of textbox in smaller versions


Map
    -map should be responsive and fully take up the remaining space
    
    -dummy properties should be loaded into the map
    
    -MapCtrl should work without having ng-controller in the view
    since the router already assigns the controller (but removing it
    stops it from working)
    
    -top menu disappears at shorter widths only happens on map view
        -Widths less than 960

Token Checker service
    -We need something that checks if the user is logged in across the board
    
    
Register Algorithm
    1) Fill in form
        A) two password forms need to match and need a directive to check this
        B) Email address has to be an email address
        C) Phone number has to be a phone number
    2) Click Register
        A) Form is checked for all necessary data
        B) AJAX call
    3) Server response
        A) If success, go to 4
        B) If failure, stay on page and let user know
    4) Server responds positively
        A)Tell the user they are registered with username X
         IN THE FUTURE, THIS CAN BE AN EMAIL
        B) Route to login
    
    Are they all mandatory?
    -required message
    
    -We need password checking directive
    -Also password length checking? required length?
    
        
Login Algorithm
    1) Fill in form
    2) Send to server
    3) Server response
        A) If Success, go to 4
        B) If failure, stay on page and let user know
    4) Success message
        A)Put token in local storage
    5) Change page information
            A)Change login to logout
            B)Remove register?
            C) Add data, bid pages need associated account data.
            Account data needs to be accesible in other places or checked.
            

    
    
=====================================================================================        
=====================================================================================        
=====================================================================================
    
I Did
    -Integrated side panel into main app
    -Login page
    -Register page
    -UI modal popup
    
David Did
    -Found/made template for side panel




Bugs
    Bug-UI router needs to have a nicer URL; htmltrue,location provider
        and base cause errors; this problem doesn't exist on RouterProvider
        but does on UIrouter. Should I switch?
        
        
        
        
=====================================================================================        
=====================================================================================        
=====================================================================================
General Notes On Angular:
    Module: stores the different parts of the app (below)
        -Template: the view
            -directives: markers on a template
            that tells the Angular HTML compiler
            to attach special behavior
            to a DOM element.
            -Directives let you to write out logic onto HTML    
    
        -scope bind template and controller together,
        if anything is changed on either end is updated
            -Data gets set initially in the controller and into the scope
            -The template grabs from scope
            -when expressions change in template, controller is updated
    
        -controller: set up initial state and logic for A VIEW
            -service is closely tied to controller
            and lets you put view independent logic.
            Then you can use that service in many different
            controllers. A service can be used to fetch and
            store a user object. Services can be injected into
            controlllers.
                -dependency injection
    
        -Router: watches URL and loads the correct template
        into the controller.
        
        
        

    
