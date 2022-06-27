package JUnit.EXTENSION;

import org.junit.jupiter.api.extension.ExtensionContext;

public class AfterAllCallback implements org.junit.jupiter.api.extension.AfterAllCallback {
    @Override
    public void afterAll(ExtensionContext extensionContext) throws Exception {
        System.out.println("AfterALLCallback");
    }
}
