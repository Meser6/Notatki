package java.JUnit.EXTENSION;

import org.junit.jupiter.api.extension.ExtensionContext;

public class BeforeTestExecutionCallback implements org.junit.jupiter.api.extension.BeforeTestExecutionCallback {
    @Override
    public void beforeTestExecution(ExtensionContext extensionContext) throws Exception {
        System.out.println("BeforeTestExecutionCallback");
    }
}
