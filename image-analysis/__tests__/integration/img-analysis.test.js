const { describe, test, expect } = require("@jest/globals");
const aws = require("aws-sdk");
aws.config.update({
  region: "us-east-1",
});
const requestMock = require("../mocks/request.json");
const { main } = require("../../src");
describe("Image analyser test suite", () => {
  test("it should analysis sucessfuly the image returning the results", async () => {
    const finalText = [
      "100.00% de ser do tipo Máquina",
      "100.00% de ser do tipo roda",
      "100.00% de ser do tipo pneu",
      "99.93% de ser do tipo carro",
      "99.93% de ser do tipo roda",
      "99.93% de ser do tipo transporte",
      "99.93% de ser do tipo veículo",
      "99.39% de ser do tipo roda de liga leve",
      "99.39% de ser do tipo raio",
      "99.10% de ser do tipo planta",
      "98.75% de ser do tipo lâmpada",
      "85.15% de ser do tipo cadeira",
      "85.15% de ser do tipo móveis",
      "80.72% de ser do tipo pessoa",
    ].join("\n");
    const expected = {
      statusCode: 200,
      body: `A imagem tem\n`.concat(finalText),
    };
    const result = await main(requestMock);
    expect(result).toStrictEqual(expected);
  });
  test("given an empty queryString at should return status code 400", async () => {
    const expectedBad = {
      statusCode: 400,
      body: "an IMG is required!",
    };
    const result = await main({ queryStringParameters: {} });
    expect(result).toStrictEqual(expectedBad);
  });

  test("given an invalid ImageURL it should return 500", async () => {
    const expectedBad = {
      statusCode: 500,
      body: "Internal Server Error!",
    };
    const result = await main({
      queryStringParameters: {
        imageUrl: "test",
      },
    });
    expect(result).toStrictEqual(expectedBad);
  });
});
