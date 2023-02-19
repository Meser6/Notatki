package java.JUnit.EXTENSION;

import org.junit.jupiter.api.extension.ExtensionContext;

public class TestExecutionExceptionHandler implements org.junit.jupiter.api.extension.TestExecutionExceptionHandler {
    @Override
    public void handleTestExecutionException(ExtensionContext extensionContext, Throwable throwable) throws Throwable {
        System.out.println("TestExecutionExceptionHandler");
    }
}
