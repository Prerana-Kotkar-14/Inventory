
@RestController
@RequestMapping("/api/users")
public class UserController{
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register") 
    public User registerUser(@RequestBody User user){
        return userService.registerUser(user);
    }

    @GetMapping("/email/{email}")
    public User getUserByEmail(@PathVariable String email) {
        return userService.getUserByEmail(email);
    }
}