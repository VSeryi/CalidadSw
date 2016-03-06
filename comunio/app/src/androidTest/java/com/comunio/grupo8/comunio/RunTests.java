package com.comunio.grupo8.comunio;

/**
 * Created by Gonzalo on 06/03/2016.
 */
import junit.framework.TestCase;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import org.junit.runner.RunWith;

@CucumberOptions(glue = "com.comunio.grupo8.comunio", format = {"junit:/data/data/com.mytest/JUnitReport.xml", "json:/data/data/com.mytest/JSONReport.json"}, tags = { "~@wip" }, features = "features")
public class RunTests extends TestCase
{
}

