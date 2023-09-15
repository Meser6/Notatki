// assercje fajnie trzymac w oddzielnym pliku i importowac a nie budowac za kazdym razem na nowo

import { expect } from "chai";

import { expect } from "chai";

export const statusCodeShouldBeEqual = function (resp, statusCode) {
  expect(resp.statusCode).to.equal(statusCode);
};

export const shouldBeType = function (resp, type) {
  expect(resp).to.be.an(type);
};

export const shouldNotBeEmptyString = function (resp) {
  shouldBeType(resp, "string");
  expect(resp).to.not.be.empty;
};

export const shoulBeEqualToString = function (resp, message) {
  shouldBeType(resp, "string");
  expect(resp).to.be.equal(message);
};

export const shouldContainChar = function (resp, char) {
  shouldBeType(resp, "string");
  expect(resp).to.include(char);
};

export const shouldBeEqualToNumber = function (resp, number) {
  shouldBeType(resp, "number");
  expect(resp).to.be.equal(number);
};

export const shouldBeNotEmptyNumber = function (resp) {
  shouldBeType(resp, "number");
  expect(resp).to.be.above(0);
};

export const shouldBeEmptyObject = function (resp) {
  shouldBeType(resp, "object");
  expect(resp).to.be.empty;
};
export const shouldHaveProperty = function (resp, property) {
  expect(resp).to.have.property(property);
};

export const shouldIncludeElement = function (resp, element, isArray = true) {
  if (isArray) shouldBeType(resp, "array");
  expect(resp).to.include(element);
};

export const shouldHaveLength = function (resp, lenghth, isArray = true) {
  if (isArray) shouldBeType(resp, "array");
  expect(resp).to.have.lengthOf(lenghth);
};

export const shouldHaveLengthAbove = function (resp, lenghth, isArray = true) {
  if (isArray) shouldBeType(resp, "array");
  expect(resp).to.have.length.above(lenghth);
};

export const shouldNotBeEmptyObject = function (resp) {
  shouldBeType(resp, "object");
  expect(resp).to.not.be.empty;
};

export const shouldBeTrue = function (resp) {
  expect(resp).to.be.equal(true);
};

export const shouldBeFalse = function (resp) {
  expect(resp).to.be.equal(false);
};

export const shouldBeNull = function (...resp) {
  resp.map((e) => {
    expect(e).to.be.null;
  });
};

export const shouldBeEmptyArray = function (resp) {
  shouldBeType(resp, "array");
  expect(resp).to.be.empty;
};

export const shouldBeNotEmptyArray = function (resp) {
  shouldBeType(resp, "array");
  expect(resp).to.be.not.empty;
};
