package StepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
public class Steps {
	WebDriver driver=null;
	@Given("Chrome Browser is Open")
	public void chrome_Browser_is_Open() {
		System.out.println("Inside Step-browser is open ");
		String Projectpath = System.getProperty("user.dir");
		System.out.println("Projectpath is:"+Projectpath);
		System.setProperty("webdriver.chrome.driver",Projectpath+"/src/test/resources/Drivers/chromedriver.exe");
		driver =new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(10,TimeUnit.SECONDS);
		//driver.manage().window().maximize();
	    
	}

	@And("User is on login page")
	public void user_is_on_login_page() {
		driver.navigate().to("https://example.testproject.io/web/");
		
	}
	

	@When("^User enters (.*) and (.*)$")
	public void user_enters_Username_and_password(String username,String password) throws InterruptedException {
	  driver.findElement(By.id("name")).sendKeys(username);
	  driver.findElement(By.id("password")).sendKeys(password);
	  Thread.sleep(2000);
	}

	@And("User clicks on the login button")
	public void user_clicks_on_the_login_button() {
		driver.findElement(By.id("login")).click();
	    
	}

	@Then("User is navigated to the home page")
	public void user_is_navigated_to_the_home_page() throws InterruptedException {
		driver.findElement(By.id("logut")).isDisplayed();
		Thread.sleep(2000);
		driver.close();
		driver.quit();
	   
	}



}
