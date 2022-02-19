package EXTENSION;

import org.junit.jupiter.api.extension.ExtensionContext;

public class AfterTestExecutionCallback implements org.junit.jupiter.api.extension.AfterTestExecutionCallback {
    @Override
    public void afterTestExecution(ExtensionContext extensionContext) throws Exception {
        System.out.println("AfterTestExecutionCallback");
    }
}
