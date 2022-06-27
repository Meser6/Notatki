package JUnit.EXTENSION;

import org.junit.jupiter.api.extension.ExtensionContext;

public class BeforeAllCallback implements org.junit.jupiter.api.extension.BeforeAllCallback {
    @Override
    public void beforeAll(ExtensionContext extensionContext) throws Exception {
        System.out.println("BeforeAllCallback");
    }
}
