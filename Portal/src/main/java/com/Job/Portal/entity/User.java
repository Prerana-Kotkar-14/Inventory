import java.time.LocalDateTime;

@Entity
@Table(name = "users")

@Data
@NoArgsConstructor
@AllArgsConstructor

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    private String email;

    private String password;

    private String role;

    @Column(name = "created_at")
    private LocalDateTime createdAt;
    
}