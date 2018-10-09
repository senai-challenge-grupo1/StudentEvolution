require 'test_helper'

class PerguntasControllerTest < ActionDispatch::IntegrationTest
  setup do
    @pergunta = perguntas(:one)
  end

  test "should get index" do
    get perguntas_url
    assert_response :success
  end

  test "should get new" do
    get new_pergunta_url
    assert_response :success
  end

  test "should create pergunta" do
    assert_difference('Pergunta.count') do
      post perguntas_url, params: { pergunta: { User_id: @pergunta.User_id, aprovada: @pergunta.aprovada, area: @pergunta.area, nivel: @pergunta.nivel, resposta1: @pergunta.resposta1, resposta2: @pergunta.resposta2, resposta3: @pergunta.resposta3, resposta4: @pergunta.resposta4, resposta_correta: @pergunta.resposta_correta, texto: @pergunta.texto } }
    end

    assert_redirected_to pergunta_url(Pergunta.last)
  end

  test "should show pergunta" do
    get pergunta_url(@pergunta)
    assert_response :success
  end

  test "should get edit" do
    get edit_pergunta_url(@pergunta)
    assert_response :success
  end

  test "should update pergunta" do
    patch pergunta_url(@pergunta), params: { pergunta: { User_id: @pergunta.User_id, aprovada: @pergunta.aprovada, area: @pergunta.area, nivel: @pergunta.nivel, resposta1: @pergunta.resposta1, resposta2: @pergunta.resposta2, resposta3: @pergunta.resposta3, resposta4: @pergunta.resposta4, resposta_correta: @pergunta.resposta_correta, texto: @pergunta.texto } }
    assert_redirected_to pergunta_url(@pergunta)
  end

  test "should destroy pergunta" do
    assert_difference('Pergunta.count', -1) do
      delete pergunta_url(@pergunta)
    end

    assert_redirected_to perguntas_url
  end
end
