package StepDefinition;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;

import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/feature",glue={"StepDefinition"},
monochrome=true, plugin = {"html:target/HtmlReports","json:target/cucumber.json-"})

public class Runnerclass {

}
