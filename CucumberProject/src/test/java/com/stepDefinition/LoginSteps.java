package com.stepDefinition;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginSteps {
	WebDriver driver;

	@Given("user is on loginpage")
	public void user_is_on_loginpage() {
		System.out.println("Step1: User is on LoginPage");
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		// driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
		driver.get("https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials");
	}

	// @When("user enters username and password") //normal
	// @When("^user enters \"(.*)\" and \"(.*)\"$") //regular DataDriven Oproach
	@When("^user enters (.*) and (.*)$")
	public void user_enters_username_and_password(String uname, String pswd) {
		System.out.println("Step2: User enters username and pswd");
		// driver.findElement(By.name("txtUsername")).sendKeys("admin");
		// driver.findElement(By.name("txtPassword")).sendKeys("admin123");
		driver.findElement(By.name("txtUsername")).sendKeys(uname);
		driver.findElement(By.name("txtPassword")).sendKeys(pswd);
	}

	@And("click on login button")
	public void click_on_login_button() throws InterruptedException {
		System.out.println("Step3: User is Clicking on Login Button");
		Thread.sleep(2000);
		driver.findElement(By.name("Submit")).click();
	}

	@Then("user should land on home page")
	public void user_should_land_on_home_page() {
		System.out.println("User lands on Home Page");
		driver.close();
	}

	@When("user enters credentials using DataTable")
	public void user_enters_credentials_using_DataTable(DataTable dataTable) {
		System.out.println("Step2: User enters username and pswd");
		List<List<String>> data = dataTable.cells();
		driver.findElement(By.name("txtUsername")).sendKeys(data.get(0).get(0));
		driver.findElement(By.name("txtPassword")).sendKeys(data.get(0).get(1));
	}
}
