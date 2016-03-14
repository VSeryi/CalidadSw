package com.comunio.grupo8.comunio;

/**
 * Created by Gonzalo on 06/03/2016.
 */
import junit.framework.TestCase;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(  monochrome = true,
        features = "src/test/resources",
        format = { "pretty","html: cucumber-html-reports",
                "json: cucumber-html-reports/cucumber.json" },
        dryRun = false,
        glue = "com.comunio.grupo8.comunio" )
public class RunTests {
}

