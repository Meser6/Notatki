package java.JUnit.EXTENSION;

import org.junit.jupiter.api.extension.ExtensionContext;

public class BeforeEachCallback implements org.junit.jupiter.api.extension.BeforeEachCallback {
    @Override
    public void beforeEach(ExtensionContext extensionContext) throws Exception {
        System.out.println("BeforeEachCallback");
    }
}
